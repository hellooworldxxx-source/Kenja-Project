import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] flex-col p-10 text-center">
           <div className="w-20 h-20 bg-indigo-600/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
             <div className="w-10 h-10 bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]"></div>
          </div>
          <h3 className="text-white font-black text-lg mb-2 tracking-tight uppercase">3D Scene Loading...</h3>
          <p className="text-zinc-500 text-xs font-medium max-w-xs">Connecting to neural core. Please wait.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
