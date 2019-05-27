import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout, Wrapper, Image } from '../components';
import './index.scss';

class Index extends Component {
  render() {
    const {
      data: {
        page: {
          data: pageData
        }
      },
      location,
    } = this.props;
    console.log('Props @ Home', this.props);
    const {
      featuredImage,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    console.log({ featuredImage });
    return (
      <Layout location={location} seoData={seoData}>
        <Wrapper>
          <div className="developer-image-hero">
            <Image image={featuredImage} />
          </div>
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        blogSlug,
      }
    },
    page: prismicHome {
      uid,
      data {
        featuredImage: featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
          url
        }
        metaTitle: meta_title {
          html
          text
        }
        metaDescription: meta_description {
          html
          text
        }
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
    }
  }
`;
