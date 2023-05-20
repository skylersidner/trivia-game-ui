import { ReactNode } from 'react';
import { Header } from './Header';

interface BaseLayoutProps {
    children: ReactNode;
}

function BaseLayout(props: BaseLayoutProps) {
    const { children } = props;
    return (
        <div className="h-full">
            <Header />
            {children}
        </div>
    );
}

export { BaseLayout };
