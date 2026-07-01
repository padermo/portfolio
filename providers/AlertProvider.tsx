"use client";
import Alert from "@/components/ui/Alert";
import React, { createContext, useMemo, useCallback, useState, useEffect, useContext } from "react";

type AlertType = "success" | "warning" | "info";

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

  const show = useCallback(
    (type: AlertType, text: string, duration = 3000) => {
      setAlert({ type, text, duration });
    },
    []
  );

  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, alert.duration);

    return () => clearTimeout(timer);
  }, [alert]);

  const value = useMemo(
    () => ({
      success: (text: string, duration?: number) =>
        show("success", text, duration),

      warning: (text: string, duration?: number) =>
        show("warning", text, duration),

      info: (text: string, duration?: number) =>
        show("info", text, duration),
    }),
    [show]
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
      {alert && <Alert type={alert.type} text={alert.text} />}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error();
  return ctx;
};
