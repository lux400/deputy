import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider } from 'react-intl';
import theme from 'src/utils/theme';
import messages from 'src/translations';
import GlobalStyles from './GlobalStyles';
import Footer from '../Footer';
import Navbar from '../Navigation';

import 'intl';


import 'bootstrap/dist/css/bootstrap-grid.css';

const getCurrentLangKey = (languages, defaultLangKey, url) =>
  languages.find(language => url.includes(`/${language}/`)) || defaultLangKey;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              languages
            }
          }
        }
      }
    `}
    render={data => {
      const url = location.pathname;
      const { languages, defaultLangKey } = data.site.siteMetadata.languages;
      const langKey = getCurrentLangKey(languages, defaultLangKey, url);
      const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
      const languagesMenu = getLangs(
        languages,
        langKey,
        getUrlForLang(homeLink, url),
      ).map(item => ({
        ...item,
        link: item.link.replace(`/${defaultLangKey}/`, '/'),
      }));
      console.log(langKey);
      console.log(messages[langKey]);
      return (
        <IntlProvider locale={langKey} messages={messages[langKey]}>
          <ThemeProvider theme={theme}>
            <>
              <Navbar
                homeLink={homeLink}
                langKey={langKey}
                defaultLangKey={defaultLangKey}
                languagesMenu={languagesMenu}
              />

              {children}
              <Footer />
              <GlobalStyles />
            </>
          </ThemeProvider>
        </IntlProvider>
      );
    }}
  />
);

export default Layout;
