'use client';
import { useTheme } from 'next-themes';
import { SunIcon, MoonStarIcon } from 'lucide-react';
import { RoundedIconMD } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';

const LightIcon = RoundedIconMD(SunIcon);
const DarkIcon = RoundedIconMD(MoonStarIcon);
const ThemeToggle = ({ className, ...props }: Props<React.ComponentProps<typeof Button>>) => {
  const { setTheme, theme } = useTheme();

  const onClickHandler = () => {
    if (!theme) return;
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
    return;
  };

  return (
    <Button
      className={cn(`rounded-full group`, className)}
      variant="ghost2"
      size="icon"
      aria-label="toggle dark-theme"
      onClick={onClickHandler}
      {...props}>
      <LightIcon className="dark:hidden" />
      <DarkIcon className="hidden dark:block dark:stroke-primary" />
    </Button>
  );
};

export default ThemeToggle;
