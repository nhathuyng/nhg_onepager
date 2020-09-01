import React from 'react';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Menu,
  Typography,
  MenuItem,
  Collapse,
  MenuList,
  ClickAwayListener,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import { Transition } from 'react-spring/renderprops';

const menuList = [
  { item: 'projects' },
  { item: 'visuals' },
  { item: 'modeling' },
  { item: 'audio' },
];

const useStyles = makeStyles((theme) => ({
  menuList: {},
  modalMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
    backgroundColor: 'rgba(107,226,51, 0.9)',
    padding: '2rem 0',
  },
  modal: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    backroundColor: 'red',
  },
  modalItem: {
    marginBottom: '1rem',
  },
}));

const MenuDropdown = () => {
  const classes = useStyles();
  const [dropMenu, setDropMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  const handleClick = () => {
    if (matchesLG) {
      setDropMenu((prev) => !prev);
    } else if (matchesMD) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (matchesLG) {
      setDropMenu(false);
    } else if (matchesMD) {
      setOpen(false);
    }
  };

  const handleClickAway = () => {
    setDropMenu(false);
  };

  const Mitem = ({ listItem: { item }, variant, style }) => {
    return (
      <MenuItem className={style}>
        <Link
          onClick={handleClose}
          to={item}
          spy={true}
          smooth={true}
          duration={500}>
          <Typography variant={variant}>{item}</Typography>
        </Link>
      </MenuItem>
    );
  };

  //?? on mobile works fine - Delay on the link to await the animation leaving - without delay it jumps back to top because animation leaving after scrolling down

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div style={{ position: 'relative' }}>
        <Button
          disableRipple
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}>
          <Typography variant='h4'>work</Typography>
        </Button>

        <Transition
          items={open}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {(open) =>
            open &&
            ((props) => (
              <Modal
                style={props}
                className={classes.modal}
                open={open}
                onClose={handleClose}>
                <Transition
                  items={open}
                  from={{ marginTop: -500 }}
                  enter={{ marginTop: 0 }}
                  leave={{ marginTop: -500 }}>
                  {(open) =>
                    open &&
                    ((props) => (
                      <MenuList
                        style={props}
                        className={classes.modalMenu}
                        id='simple-menu'
                        onClose={handleClose}>
                        {menuList.map((listItem, index) => (
                          <Mitem
                            key={index}
                            style={classes.modalItem}
                            variant='h3'
                            listItem={listItem}
                          />
                        ))}
                      </MenuList>
                    ))
                  }
                </Transition>
              </Modal>
            ))
          }
        </Transition>

        <Collapse style={{ position: 'absolute' }} in={dropMenu}>
          <MenuList
            className={classes.menuList}
            id='simple-menu'
            onClose={handleClose}>
            {menuList.map((listItem, index) => (
              <Mitem key={index} variant='h6' listItem={listItem} />
            ))}
          </MenuList>
        </Collapse>
      </div>
    </ClickAwayListener>
  );
};

export default MenuDropdown;
