import { Outlet } from "@tanstack/react-router";

const AuthLayout = () => {
  return (
    <div className="auth-layout min-h-screen flex items-center justify-center bg-muted/50">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
