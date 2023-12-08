FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apt-get update -y
RUN apt-get install -y openssl
RUN corepack enable
# COPY . /bttr
WORKDIR /bttr

FROM base AS builder
COPY /turbo.json /bttr/
COPY /package.json /bttr/
COPY /pnpm-lock.yaml /bttr/
COPY /pnpm-workspace.yaml /bttr/
COPY /apps/ /bttr/apps/
COPY /packages/ /bttr/packages/
COPY /core/server /bttr/core/server/
COPY /core/launchpad /bttr/core/launchpad

FROM base AS installer
COPY --from=builder /bttr/ .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install 
RUN pnpm run database:generate
RUN pnpm run build

FROM base AS runner
COPY --from=installer /bttr/ .
CMD pnpm run server



# RUN apk add --no-cache libc6-compat
# RUN apk update
# Set working directory
# WORKDIR /bttr
# RUN yarn global add turbo
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
# COPY . .
# RUN yarn install
# RUN pnpm run docker:prune

# Add lockfile and package.json's of isolated subworkspace
# FROM base AS installer
# RUN apk add --no-cache libc6-compat
# RUN apk update
# WORKDIR /bttr

# First install the dependencies (as they change less often)
# COPY .gitignore .gitignore
# COPY --from=builder /bttr/out/json/ .
# COPY --from=builder /bttr/out/pnpm-lock.yaml ./pnpm-lock.yaml
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --no-frozen-lockfile

# Build the project
# COPY --from=builder /bttr/out/full/ .
# RUN pnpm run build 

# FROM base AS runner
# WORKDIR /bttr

# Don't run production as root
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs
# USER nextjs

# COPY --from=installer /bttr/apps/ .
# COPY --from=installer /bttr/apps/web/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=installer --chown=nextjs:nodejs /bttr/apps/web/.next/standalone ./
# COPY --from=installer --chown=nextjs:nodejs /bttr/apps/web/.next/static ./apps/web/.next/static
# COPY --from=installer --chown=nextjs:nodejs /bttr/apps/web/public ./apps/web/public

# CMD pnpm run server