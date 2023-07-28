import { BtnLink } from '@/components/button/BtnLink';
import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

export const Hero = () => {
  return (
    <Section className="hero-bg bg-white pb-[105px] pt-20 md:pb-[215px] md:pt-[119px] xl:pb-[233px] xl:pt-[120px]">
      <div className="container text-center">
        <Title
          tag="h1"
          className="mb-5 md:mb-10 smOnly:mx-auto smOnly:max-w-[290px]"
        >
          lorem
          <span className="text-primary">lorem</span>
          lorem
        </Title>
        <Paragraph className="mx-auto mb-10 max-w-[387px] md:mb-10 md:max-w-[498px] xl:max-w-[568px]">
          lorem
        </Paragraph>
        <BtnLink href={'form'} scroll className="mx-auto mb-4 block md:mb-5">
          lorem
        </BtnLink>
      </div>
    </Section>
  );
};
