import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';
import theme from './src/themes/default' // eslint-disable-line
import getPageContext from './src/themes/getPageContext';

exports.replaceRenderer = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {
    
    const sheet = new ServerStyleSheet(); //styled-components
    
    const pageContext = getPageContext();
    
    const app = (
        <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName} >
            <StyleSheetManager sheet={sheet.instance}>
                {React.cloneElement(bodyComponent, {
                    pageContext,
                })}
            </StyleSheetManager>
        </JssProvider>
    );
    
    const body = renderToString(app);
    
    replaceBodyHTMLString(body);
    setHeadComponents([
        <style
            type="text/css"
            id="server-side-jss"
            key="server-side-jss"
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />,
        sheet.getStyleElement()
    ]);
    
    return;
};