'use client';
import { ConfigProvider } from 'antd';
import type { Children } from '@/types/generals';
import { useTheme } from '@/context/ThemeContext';

export default function ConfigThemeAnt({ children }: Children) {
  const { theme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#CFB53B',
            colorPrimaryActive: '#b49d33',
            colorPrimaryHover: '#e7cd59',
            primaryShadow: 'none',
            colorTextLightSolid: '#222'
          },
          FloatButton: {
            colorPrimary: theme === 'dark' ? '#444' : '#e8e8e8',
            colorPrimaryHover: theme === 'dark' ? '#555' : '#f2f2f2'
          },
          Input: {
            boxShadow: 'none',
            activeShadow: 'none',
            hoverBorderColor: '#CFB53B',
            activeBorderColor: '#CFB53B',
            colorBgContainer: theme === 'dark' ? '#444' : '#e8e8e8',
            colorBorder: theme === 'dark' ? '#111' : '#d9d9d9',
            colorError: '#B8001C',
            colorErrorBorderHover: '#B8001C'
          },
          Message: {
            contentBg: theme === 'dark' ? '#444' : '#e8e8e8',
            colorText: theme === 'dark' ? '#e8e8e8' : '#222',
          },
          Switch: {
            colorPrimary: '#CFB53B',
            colorPrimaryBorder: '#b49d33',
            colorPrimaryHover: '#e7cd59',
            colorTextLightSolid: theme === 'dark' ? '#fff' : '#222',
            handleBg: theme === 'dark' ? '#fff' : '#222'
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
