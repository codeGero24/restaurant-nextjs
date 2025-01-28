import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import styled from './Footer.module.scss';

// - Mock
import { COMPANY, CONTANCT } from '@/mock/footer';

export default function Footer() {
  const sectionCompany = React.useMemo(
    () =>
      COMPANY.links.map((item, index) => (
        <li
          key={`company-${index}`}
          className='capitalize transition-all duration-500 hover:tracking-[1px]'
        >
          <Link href={item.link}>
            <Icon name='chevron-right' className='icon xs mr-2' />
            {item.name}
          </Link>
        </li>
      )),
    []
  );

  const sectonContact = React.useMemo(() => {
    return (
      <>
        {CONTANCT.links.map(link => (
          <li key={link.id}>
            <Icon {...link.icon} className='icon xs mr-2' />
            {link.description}
          </li>
        ))}
        <li className='flex gap-2'>
          {CONTANCT.socials.map(social => (
            <a
              href={social.link}
              target='_blank'
              rel='noreferrer'
              key={`social-${social.name}`}
              className='flex h-[36px] w-[36px] items-center justify-center rounded-[50%] border-[1px] border-white p-[4px] transition-all hover:bg-white hover:text-primary'
            >
              <Icon {...social.icon} type='brand' className='icon xs' />
            </a>
          ))}
        </li>
      </>
    );
  }, []);

  return (
    <AnimationWrapper
      as='footer'
      animation='animate-fede-in-slow'
      className='bg-dark px-4 pt-12 text-gray-100 lg:px-8'
    >
      <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
        {/* Company */}
        <div className={styled.footer__section}>
          <h4 className='mb-4 font-pacifico font-normal text-primary'>{COMPANY.title}</h4>
          <ul className='grid grid-cols-1 gap-2'>{sectionCompany}</ul>
        </div>

        {/* Contact */}
        <div className={styled.footer__section}>
          <h4 className='mb-4 font-pacifico font-normal text-primary'>
            {CONTANCT.title}
          </h4>
          <ul className='grid grid-cols-1 gap-3'>{sectonContact}</ul>
        </div>

        {/* Opening */}
        <div className={styled.footer__section}>
          <h4 className='mb-4 font-pacifico font-normal text-primary'>Opening</h4>
          <ul className='grid grid-cols-1 gap-2'>
            <li>
              <p className='font-nunito text-xl'>Monday - Friday</p> 9:00 - 22:00
            </li>
            <li>
              <p className='font-nunito text-xl'>Saturday - Sunday</p> 10:00 - 24:00
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styled.footer__section}>
          <h4 className='mb-4 font-pacifico font-normal text-primary'>Newsletter</h4>
          <div className='grid grid-cols-1 gap-4'>
            <p>Subscribe to our newsletter to get the latest updates.</p>
            <form className='relative'>
              <div className='relative w-full'>
                <input
                  type='email'
                  name='email-newsletter'
                  placeholder='Your Email'
                  className='input'
                />
                <label htmlFor='email-newsletter' className='label text-gray-800'>
                  Your Email
                </label>
              </div>

              <button
                type='submit'
                className={clsx('button', 'absolute right-2 top-3 p-2 uppercase')}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='md:grid-col-2 mt-8 grid grid-cols-1 border-t border-gray-800 py-6 md:grid-cols-2'>
        <div className='text-center lg:text-left'>
          <p className='p-y2'>
            &copy; <span className='underline-offset-5 underline'>Your Site Name</span>,
            All Right Reserved. Designed By &nbsp;
            <span className='underline-offset-5 underline'>HTML Codex</span>
          </p>
          <p className='py-4'>
            Distributed By &nbsp;
            <span className='underline-offset-5 underline'>People First</span>
          </p>
        </div>

        <div>
          <ul className='flex justify-end gap-4'>
            <li className='border-r border-gray-800 pr-4'>Home</li>
            <li className='border-r border-gray-800 pr-4'>Cookies</li>
            <li className='border-r border-gray-800 pr-4'>Help</li>
            <li className='pr-4'>FQAs</li>
          </ul>
        </div>
      </div>
    </AnimationWrapper>
  );
}
