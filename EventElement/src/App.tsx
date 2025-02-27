import { Button, FluentProvider, webLightTheme } from '@fluentui/react-components'
import * as React from 'react'
import { AppProps } from './types/AppProps'

const App = ({ onButtonClick, }: AppProps) => {
	return (
		<div>
			<FluentProvider theme={webLightTheme}>
				<Button onClick={() => {
					onButtonClick();
				}}
					appearance="primary">Trigger Canvas App Expression</Button>
			</FluentProvider>
		</div>
	)
}

export default App