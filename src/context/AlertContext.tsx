"use client";
import Alert from "@/components/Alert";
import React, { createContext, useContext, useState, useEffect } from "react";

type AlertType = "success" | "error" | "info";

export interface AlertProps {
  type: AlertType;
  text: string;
  duration?: number;
}

interface AlertContextType {
  success: (text: string, duration?: number) => void;
  warning: (text: string, duration?: number) => void;
  info: (text: string, duration?: number) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const show = (type: AlertType, text: string, duration = 3000) => {
    setAlert({ type, text, duration });
  };

  const success = (text: string, duration?: number) =>
    show("success", text, duration);
  const warning = (text: string, duration?: number) =>
    show("error", text, duration);
  const info = (text: string, duration?: number) =>
    show("info", text, duration);

  // Cierra el alert automáticamente
  useEffect(() => {
    if (!alert) return;
    if (!alert.duration) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, alert.duration);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ success, warning, info }}>
      {children}
      {alert && <Alert type={alert.type} text={alert.text} />}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider");
  return ctx;
};
