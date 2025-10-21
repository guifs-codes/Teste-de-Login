import { useState } from "react";
import { TextInput, PasswordInput, Button, Divider, Stack, Text, Anchor } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import logoImage from "figma:asset/2ac586f3e3f546292a8aa736a0c072191da5eac3.png";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "" && passwordError === "";

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    
    if (value.length > 0 && value.length <= 3) {
      setPasswordError("A senha deve ter mais de 3 caracteres");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      notifications.show({
        title: "Login realizado com sucesso!",
        message: "Você foi autenticado e será redirecionado.",
        color: "green",
        styles: {
          root: {
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          },
          title: {
            color: 'var(--foreground)',
          },
          description: {
            color: 'var(--muted-foreground)',
          },
        },
      });
    }
  };

  const handleGoogleLogin = () => {
    notifications.show({
      title: "Login com Google realizado!",
      message: "Você foi autenticado através do Google.",
      color: "green",
      styles: {
        root: {
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
        },
        title: {
          color: 'var(--foreground)',
        },
        description: {
          color: 'var(--muted-foreground)',
        },
      },
    });
  };

  const handleForgotPassword = () => {
    notifications.show({
      title: "Funcionalidade de redefinir senha",
      message: "Link de recuperação será enviado para seu email.",
      color: "blue",
      styles: {
        root: {
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
        },
        title: {
          color: 'var(--foreground)',
        },
        description: {
          color: 'var(--muted-foreground)',
        },
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 md:p-8">
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <img 
          src={logoImage} 
          alt="Logo" 
          className="h-12 md:h-16 mb-8 md:mb-10 object-contain"
        />
        <h1 className="mb-2">Bem-vindo de volta</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>
          Entre com suas credenciais para continuar
        </p>
      </div>

      <form onSubmit={handleLogin}>
        <Stack gap="lg">
          <TextInput
            label="Email"
            placeholder="seu@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            styles={{
              input: {
                backgroundColor: 'var(--input-background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                borderRadius: 'var(--radius)',
                '&:focus': {
                  borderColor: 'var(--ring)',
                },
                '&::placeholder': {
                  color: 'var(--muted-foreground)',
                },
              },
              label: {
                color: 'var(--foreground)',
              },
            }}
          />

          <div>
            <PasswordInput
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              error={passwordError}
              required
              styles={{
                input: {
                  backgroundColor: 'var(--input-background)',
                  borderColor: passwordError ? 'var(--destructive)' : 'var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: 'var(--radius)',
                  '&:focus': {
                    borderColor: passwordError ? 'var(--destructive)' : 'var(--ring)',
                  },
                  '&::placeholder': {
                    color: 'var(--muted-foreground)',
                  },
                },
                label: {
                  color: 'var(--foreground)',
                },
                error: {
                  color: 'var(--destructive)',
                },
                innerInput: {
                  backgroundColor: 'var(--input-background)',
                  color: 'var(--foreground)',
                },
                visibilityToggle: {
                  color: 'var(--muted-foreground)',
                  '&:hover': {
                    color: 'var(--foreground)',
                  },
                },
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Anchor
              component="button"
              type="button"
              onClick={handleForgotPassword}
              style={{
                color: 'var(--primary)',
              }}
            >
              Esqueceu sua senha?
            </Anchor>
          </div>

          <Button
            type="submit"
            fullWidth
            disabled={!isFormValid}
            styles={{
              root: {
                backgroundColor: isFormValid ? 'var(--primary)' : 'var(--muted)',
                color: isFormValid ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                borderRadius: 'var(--radius-button)',
                border: 'none',
                '&:hover': {
                  backgroundColor: isFormValid ? 'var(--primary)' : 'var(--muted)',
                  opacity: isFormValid ? 0.9 : 1,
                },
                '&:disabled': {
                  backgroundColor: 'var(--muted)',
                  color: 'var(--muted-foreground)',
                },
              },
            }}
          >
            Entrar
          </Button>

          <Divider 
            label="ou" 
            labelPosition="center"
            styles={{
              label: {
                color: 'var(--muted-foreground)',
                backgroundColor: 'var(--background)',
              },
              root: {
                borderColor: 'var(--border)',
              },
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="outline"
            onClick={handleGoogleLogin}
            leftSection={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            styles={{
              root: {
                backgroundColor: 'transparent',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                borderRadius: 'var(--radius-button)',
                '&:hover': {
                  backgroundColor: 'var(--muted)',
                },
              },
            }}
          >
            Continuar com Google
          </Button>
        </Stack>
      </form>
    </div>
  );
}
