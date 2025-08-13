import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * AppKit 按钮 Web 组件。由 AppKit 全局注册。
       */
      'appkit-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// 确保文件被视为模块
export {};