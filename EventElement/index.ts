/* eslint-disable no-debugger */
import * as React from "react";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { createRoot, Root } from 'react-dom/client';
import App from "./src/App";
import { AppProps } from "./src/types/AppProps";
export class EventElement implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    _container: HTMLDivElement;
    _context: ComponentFramework.Context<IInputs>;
    private rootControl: Root;
    constructor() {

    }


    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container;
        this._context = context;

    }
    renderControl() {
        this.rootControl = createRoot(this._container);
        const appProps: AppProps = {
            onButtonClick: () => {
                debugger
                this._context.events.onButtonClick();
            },
        } as AppProps
        this.rootControl.render(
            React.createElement(App, appProps)
        );
    }
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
        this.renderControl();
    }
    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {

    }
}
