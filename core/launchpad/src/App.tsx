import {
  AppProvider,
  AppShell,
  Group,
  Text,
  Container,
  Anchor,
  SimpleGrid,
  Card,
  Title,
  Menu,
  Avatar,
  Tabs,
  Stack,
  ActionIcon,
  Box,
} from "@bttr/ui";
import {
  IconBell,
  IconListCheck,
  IconLogout2,
  IconSearch,
  IconSettings2,
} from "@bttr/icons";
import { faker } from "@bttr/faker";

import classes from "./App.module.css";

const times = (n: number) => {
  const renderer: Array<number> = [];

  while (n-- > 0) {
    renderer.push(n);
  }

  return renderer;
};

function App() {
  return (
    <>
      <AppProvider>
        <AppShell header={{ height: 160 }}>
          <AppShell.Header withBorder={false}>
            <Box bg="aliceblue" style={{ borderBottom: "0.5px solid #cfcfcf" }}>
              <Container py="lg">
                <Group justify="space-between">
                  <Group>
                    <Text className={classes.logo}>bttr</Text>
                  </Group>
                  <Group>
                    <ActionIcon variant="transparent">
                      <IconSearch></IconSearch>
                    </ActionIcon>
                    <ActionIcon variant="transparent">
                      <IconBell></IconBell>
                    </ActionIcon>
                    <Menu
                      withArrow
                      arrowPosition="center"
                      position="bottom-end"
                      withinPortal
                    >
                      <Menu.Target>
                        <Avatar
                          radius="sm"
                          style={{ cursor: "pointer" }}
                          src={faker.internet.avatar()}
                        ></Avatar>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Label fz={"md"}>
                          {faker.internet.displayName()}
                        </Menu.Label>
                        <Menu.Item
                          leftSection={<IconListCheck></IconListCheck>}
                        >
                          Frequently Used
                        </Menu.Item>
                        <Menu.Item
                          leftSection={<IconSettings2></IconSettings2>}
                        >
                          Settings
                        </Menu.Item>
                        <Menu.Divider></Menu.Divider>
                        <Menu.Item leftSection={<IconLogout2></IconLogout2>}>
                          Logout
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Group>
              </Container>
            </Box>
            <Box>
              <Container>
                <Tabs py="md">
                  <Tabs.List>
                    <Tabs.Tab value="accounting">
                      <Anchor href="#accounting">Accounting</Anchor>
                    </Tabs.Tab>
                    <Tabs.Tab value="sales">
                      <Anchor href="#sales">Sales</Anchor>
                    </Tabs.Tab>
                    <Tabs.Tab value="production">
                      <Anchor href="#production">Production</Anchor>
                    </Tabs.Tab>
                    <Tabs.Tab value="marketing">
                      <Anchor href="#marketing">Marketing</Anchor>
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Container>
            </Box>
          </AppShell.Header>
          <AppShell.Main>
            <Container>
              <Stack gap="xl">
                <Stack gap="xs">
                  <Title order={3} id="accounting">
                    Accounting
                  </Title>
                  <SimpleGrid spacing="xl" cols={4}>
                    <Anchor
                      href="/apps/bttr/wow"
                      style={{ display: "inherit", textDecoration: "none" }}
                    >
                      <Card shadow="xl" withBorder>
                        <Title order={4}>WOW App</Title>
                      </Card>
                    </Anchor>
                    <Anchor
                      href="/apps/bttr/nuts"
                      style={{ display: "inherit", textDecoration: "none" }}
                    >
                      <Card shadow="xl" withBorder>
                        <Title order={4}>This is nuts</Title>
                      </Card>
                    </Anchor>
                    <Anchor
                      href="/apps/bttr/test"
                      style={{ display: "inherit", textDecoration: "none" }}
                    >
                      <Card shadow="xl" withBorder>
                        <Title order={4}>Just a test</Title>
                      </Card>
                    </Anchor>
                  </SimpleGrid>
                </Stack>
                <Stack gap="xs">
                  <Title order={3} id="sales">
                    Sales
                  </Title>
                  <SimpleGrid spacing="xl" cols={4}>
                    {times(6).map((index) => {
                      return (
                        <Card shadow="xl" withBorder key={index}>
                          <Title order={4}>
                            {faker.commerce.productName()}
                          </Title>
                        </Card>
                      );
                    })}
                  </SimpleGrid>
                </Stack>
                <Stack gap="xs">
                  <Title order={3} id="production">
                    Production
                  </Title>
                  <SimpleGrid spacing="xl" cols={4}>
                    {times(102).map((index) => {
                      return (
                        <Card shadow="xl" withBorder key={index}>
                          <Title order={4}>
                            {faker.commerce.productName()}
                          </Title>
                        </Card>
                      );
                    })}
                  </SimpleGrid>
                </Stack>
                <Stack gap="xs">
                  <Title order={3} id="marketing">
                    Marketing
                  </Title>
                  <SimpleGrid spacing="xl" cols={4}>
                    {times(2).map((index) => {
                      return (
                        <Card shadow="xl" withBorder key={index}>
                          <Title order={4}>
                            {faker.commerce.productName()}
                          </Title>
                        </Card>
                      );
                    })}
                  </SimpleGrid>
                </Stack>
              </Stack>
            </Container>
          </AppShell.Main>
        </AppShell>
      </AppProvider>
    </>
  );
}

export default App;
