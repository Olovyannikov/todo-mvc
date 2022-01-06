import {Main} from "./Main/Main";
import {LayoutProps} from "./Layout.props";
import {Component, FunctionComponent} from "react";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div>
            <Main>
                <div>
                    {children}
                </div>
            </Main>
        </div>
    )
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => JSX.Element => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}