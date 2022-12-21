import React from 'react'
import { Menu, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = ({setUser}) => {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      return (
        <div>
        <Menu>
            <Image src='./TastyPantryLogo.jpg' size='small'/>
            <Menu.Item>
                <Button as={Link} to="/home" icon labelPosition='left'>
                  <Icon name='home'/>
                  Home
                </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/ingredients" icon labelPosition='left'>
                  <Icon name='food'/>
                  Ingredients
                </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/recipes" icon labelPosition='left'>
                  <Icon name='list alternate outline'/>
                  Find Recipes
                </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/favorites" icon labelPosition='left'>
                  <Icon name='favorite'/>
                  My Recipes
                </Button>
            </Menu.Item>
            <Menu.Item>
                    <Button onClick={handleLogoutClick} icon labelPosition='left'>
                      <Icon name='log out'/>
                        Logout
                    </Button>
            </Menu.Item>
        </Menu>
    </div>
      )
}

export default NavBar