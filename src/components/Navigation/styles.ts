import styled from "styled-components";

export const NavHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 400;
  transition: all ease-out 0.3s;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpointMedium}) {
    transform: translate3d(0, -100%, 0);
  }
  .nav-wrapper {
    display: flex;
    max-height: calc(100vh - 6rem);
    padding: 2rem 4rem;
    overflow-y: auto;
    @media only screen and (max-width: ${(props) =>
        props.theme.breakpointMedium}) {
      background: var(--color-neutral-15);
      flex-direction: column;
      @supports (-webkit-backdrop-filter: blur(2rem)) {
        background: rgba(34, 36, 38, 0.9);
        -webkit-backdrop-filter: blur(2rem);
      }
    }
  }
  ul {
    position: relative;
    display: flex;
    width: 100%;
    margin: auto;
    padding: 0;
    list-style: none;
    @media only screen and (max-width: ${(props) =>
        props.theme.breakpointMedium}) {
      flex-direction: column;
      flex-shrink: 0;
      padding: 2rem 0;
    }
    &:last-child {
      justify-content: flex-end;
      @media only screen and (max-width: ${(props) =>
          props.theme.breakpointMedium}) {
        display: none;
      }
    }
  }
  li {
    position: relative;
    margin-right: 3rem;
    &.active {
      a:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        left: 0;
        top: 0;
        padding: 0 1rem;
        margin-left: -1rem;
        margin-top: -2rem;
        background: var(--color-primary);
        @media only screen and (max-width: ${(props) =>
            props.theme.breakpointMedium}) {
          left: 0;
          top: 50%;
          width: 1.5rem;
          height: 2px;
          margin-left: 6px;
          margin-top: -1px;
          border-radius: 2px;
          padding: 0;
        }
      }

      a {
        color: var(--color-neutral-25);
        font-weight: 500;
        @media only screen and (max-width: ${(props) =>
            props.theme.breakpointMedium}) {
          color: var(--color-white);
        }
      }
    }
    a {
      display: block;
      padding: 1rem 0;
      font-size: 1.6em;
      line-height: 2rem;
      color: var(--color-text-secondary);
      white-space: nowrap;
      text-overflow: ellipsis;
      text-decoration: none;
      font-weight: 400;
      cursor: pointer;
      transition: color linear 0.1s;

      &:focus,
      &:hover {
        color: var(--color-neutral-25);
        @media only screen and (max-width: ${(props) =>
            props.theme.breakpointMedium}) {
          background: var(--color-neutral-80);
        }
      }

      @media only screen and (max-width: ${(props) =>
          props.theme.breakpointMedium}) {
        font-size: 2em;
        padding-left: 4rem;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 1.5rem;
          height: 2px;
          margin-left: 6px;
          margin-top: -1px;
          border-radius: 2px;
          background: var(--color-neutral-25);
        }
      }
    }
  }
`;

export const NavControl = styled.div`
  position: absolute;
  z-index: 500;
  left: 0;
  top: 100%;
  width: 100%;
  cursor: pointer;
  display: none;
  color: var(--color-text-secondary);
  border-top: 1px solid transparent;
  box-sizing: border-box;
  transition: all linear 0.1s;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpointMedium}) {
    display: block;
  }
  .inner {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    display: inline-block;
    margin: 0 0.2em;
    width: 4rem;
    height: 17px;
  }
  .nav-search span {
    display: none;
  }
  a {
    position: relative;
    display: block;
    width: 100%;
    padding: 2rem 0;
    font-size: 2em;
    line-height: 2rem;
    color: inherit;
    transition: all ease-out 0.1s;

    i {
      display: inline-block;
      width: 4rem;
    }

    &.nav-search {
      width: auto;
      text-align: right;
    }

    &:focus,
    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const NavClose = styled.div`
  position: fixed;
  z-index: 350;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
  display: none;
`;
