use tauri::{Manager, Window};

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
async fn close_splashscreen(window: Window) {
    window.get_window("splash").expect("no window labeled 'splashscreen' found").close().unwrap();
    window.get_window("logon").expect("no window labeled 'logon' found").show().unwrap();
}

#[tauri::command]
async fn show_mainscreen(window: Window) {
    window.get_window("logon").expect("no window labeled 'splashscreen' found").hide().unwrap();
    window.get_window("main").expect("no window labeled 'logon' found").show().unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen, show_mainscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
