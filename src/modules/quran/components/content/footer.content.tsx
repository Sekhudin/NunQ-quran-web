import { MainFooter } from 'components/HOCs/container.hoc';
import { Separator } from 'packages/ui/separator';
import { PUBLIC_APP } from 'configs/env.config';

const Content = () => {
  const date = new Date();
  const year = '@' + date.getFullYear();

  return (
    <>
      <div className="invisible">Common Footer</div>
      <div className="flex items-center gap-x-1 text-xs md:text-sm">
        <span>{year}</span>
        <span className="font-semibold">{PUBLIC_APP.name}</span>
        <Separator className='min-h-4 mx-2' orientation='vertical' />
        <span>All rights reserved</span>
      </div>
    </>
  );
};

const FooterContent = MainFooter(Content);
export default FooterContent;
