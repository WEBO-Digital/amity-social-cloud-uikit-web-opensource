import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideMenu from '~/core/components/SideMenu';
import SideSectionCommunity from '~/social/components/SideSectionCommunity';
import SideSectionMyCommunity from '~/social/components/SideSectionMyCommunity';
import UiKitSocialSearch from '~/social/components/SocialSearch';

const SocialSearch = styled(UiKitSocialSearch)`
  background: ${({ theme }) => theme.palette.system.background};
  padding: 0.5rem;
  @media (max-width: 993px) {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: ${({ theme }) => theme.palette.grayshade1.main};
  }
`;
const TabGroup = styled.div`
  position: relative;
  @media (max-width: 993px) {
    h4 {
      text-align: center;
    }
  }
  @media (min-width: 993px) {
    display: flex;
    flex-wrap: wrap;
    & > div:first-of-type {
      order: 2;
    }
    & > div:last-of-type {
      order: 1;
    }
  }
`;

const CommunitySideMenu = ({ className, activeCommunity }) => (
  <SideMenu data-qa-anchor="community-side-menu" className={className}>
    <TabGroup>
      <SideSectionCommunity />
      <SocialSearch sticky />
    </TabGroup>

    <SideSectionMyCommunity activeCommunity={activeCommunity} showCreateButton />
  </SideMenu>
);

CommunitySideMenu.propTypes = {
  className: PropTypes.string,
  activeCommunity: PropTypes.string,
};

export default CommunitySideMenu;
