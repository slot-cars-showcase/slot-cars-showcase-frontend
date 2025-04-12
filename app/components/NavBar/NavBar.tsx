import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router';
import { BrandLogo } from '../BrandLogo/BrandLogo';
import { Typography } from '../Typography/Typography';

export function NavBar() {
  return (
    <header className="bg-primary flex justify-center gap-6 p-5 shadow-2xl">
      <Link to="">
        <BrandLogo width={200} className="text-primary-foreground" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/models"
              className={navigationMenuTriggerStyle({
                className:
                  'text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary',
              })}
            >
              <Typography variant="small">Modelos</Typography>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/spare-parts"
              className={navigationMenuTriggerStyle({
                className:
                  'text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary',
              })}
            >
              <Typography variant="small">Recambios</Typography>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className={navigationMenuTriggerStyle({
                className:
                  'text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary',
              })}
            >
              <Typography variant="small">Contacto</Typography>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
