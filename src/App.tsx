import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { LoginForm } from "./components/LoginForm";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const theme = createTheme({
  fontFamily: 'var(--font-family-primary)',
  primaryColor: 'violet',
  defaultRadius: 'var(--radius)',
  colors: {
    violet: [
      '#f5f3ff',
      '#ede9fe',
      '#ddd6fe',
      '#c4b5fd',
      '#a78bfa',
      '#9369ff',
      '#7c3aed',
      '#6d28d9',
      '#5b21b6',
      '#4c1d95',
    ],
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Notifications position="bottom-center" />
      <div className="dark min-h-screen size-full flex items-center justify-center bg-background">
        <LoginForm />
      </div>
    </MantineProvider>
  );
}
