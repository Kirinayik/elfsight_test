import { FC } from 'react'
import { AppStore } from '@global/types'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@assets/styles/theme'

interface ProvidersProps {
    children: JSX.Element
    store: AppStore
}

const ProvideTheme: FC<{ children: JSX.Element }> = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export const Providers: FC<ProvidersProps> = ({ children, store }) => {
    return (
        <Provider store={store}>
            <ProvideTheme>{children}</ProvideTheme>
        </Provider>
    )
}
