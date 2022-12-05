import { GlobalStyles, theme } from '@/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import React, { createContext, FC, useContext, useState } from 'react';

type SiteState = {
    language: 'nl';
};

type SiteContext = {
    siteState: SiteState;
    setSiteState: React.Dispatch<React.SetStateAction<SiteState>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const siteContext = createContext<SiteContext>(null as any);

export const useSiteContext = (): SiteContext => useContext(siteContext);

export const LayoutProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [siteState, setSiteState] = useState<SiteState>({
        language: 'nl',
    });

    return (
        <siteContext.Provider value={{ siteState, setSiteState }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </siteContext.Provider>
    );
};
