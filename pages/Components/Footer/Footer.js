import React from 'react'
import Logo from './Logo.svg'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import useWindowDimensions from '../../../hooks/useWindowsDimensions'
const Footer = () => {
  const { width } = useWindowDimensions()
  return (
    <div className="overflow-hidden mt-10 bg-gray-900">
      {width > 1023 ? (
        <div className="w-screen py-10 px-20 ">
          <div className="grid gap-y-4">
            <div className="grid grid-cols-4">
              <div className="flex gap-x-4 items-center">
                <div className="flex gap-2">
                  <Image width={50} height={50} src={Logo} />
                  <h2 className="gradientPrimary text-4xl font-bold">
                    CryptoSwap
                  </h2>
                </div>
              </div>
              <h3 className="my-auto gradientPrimary">Services</h3>
              <h3 className="my-auto gradientPrimary">About</h3>
              <h3 className="my-auto gradientPrimary">Follow Us</h3>
            </div>
            <div className="grid grid-cols-4">
              <p className="w-72 text-base text-[#999]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-rows-3">
                <p className="text-base text-white">SERVICE1</p>
                <p className="text-base text-white">SERVICE2</p>
                <p className="text-base text-white">SERVICE3</p>
              </div>
              <div className="grid grid-rows-4 gap-y-3">
                <p className="text-base text-white">Our Story</p>
                <p className="text-base text-white">Benefits</p>
                <p className="text-base text-white">Team</p>
                <p className="text-base text-white">Careers</p>
              </div>
              <div className="grid grid-rows-3">
                <p className="text-base text-white flex gap-4 justify-start">
                  <FaFacebookF className="relative top-1" /> Facebook
                </p>
                <p className="text-base text-white flex gap-4 justify-start">
                  <FaTwitter className="relative top-1" /> Twitter
                </p>
                <p className="text-base text-white flex gap-4 justify-start">
                  <FaInstagram className="relative top-1" /> Instagram
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-20">
            <p className="opacity-50 text-base text-white">
              Copyright, AGAFAY 2022.
            </p>
            <div className="flex gap-x-5">
              <p className="text-base text-white">Terms & Conditions</p>
              <p className="text-base text-white">Privacy Policy</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen py-10 px-5">
          <div>
            <img className="w-1/2  mt-5" src={Logo} />
            <p className="text-sm mt-2 leading-loose  text-gray-500">
              Lorem Ipsum is simply dummy text of <br />
              the printing
            </p>
            <div className="flex mt-2 gap-3">
              <div className="px-2 py-2 shadow-md rounded-full bg-white group hover:bg-primary transition-all">
                <FaFacebookF className="text-Black group-hover:text-white" />
              </div>
              <div className="px-2 py-2 shadow-md rounded-full bg-white group hover:bg-primary transition-all">
                <FaInstagram className="text-Black group-hover:text-white" />
              </div>
              <div className="px-2 py-2 shadow-md rounded-full bg-white group hover:bg-primary transition-all">
                <FaTwitter className="text-Black group-hover:text-white" />
              </div>
            </div>
          </div>
          <div className="px-5  flex justify-between mt-5">
            <div className="inline-flex flex-col gap-3">
              <p className="text-sm font-semibold leading-relaxed text-gray-900">
                Company
              </p>
              <p className="text-sm leading-relaxed text-gray-500">About</p>
              <p className="text-sm leading-relaxed text-gray-500">Careers</p>
              <p className="text-sm leading-relaxed text-gray-500">
                Privacy & Policy
              </p>
            </div>
            <div className="inline-flex flex-col gap-3">
              <p className="text-sm font-semibold leading-relaxed text-gray-900">
                Contact
              </p>
              <p className="text-sm leading-relaxed text-gray-500">Help/FAQ</p>
              <p className="text-sm leading-relaxed text-gray-500">Whatsapp</p>
            </div>
          </div>
          <div className=" w-full h-[1px] mt-3 mb-5 bg-Black bg-opacity-20" />
          <div className="flex justify-between ">
            <p className="opacity-80 text-xs text-gray-500">
              Copyright, CryptoSwap.
            </p>
            <p className="opacity-80 text-xs text-gray-500">
              Terms & Conditions
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer
