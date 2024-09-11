import React from "react";
import './Center.css'
import phone from '../../assets/phone.jpg'
import cloud from '../../assets/cloud.png'
import fone from '../../assets/fone.png'
import coding from '../../assets/coding.jpg'
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const CenterContainer = ()=> {
    return(

        <div className="center text-center flex flex-col">
            <div>
                <h1  style={{color:"white", fontSize:"40px", marginTop:"70px"}}>What do we do</h1>
                <p style={{color:"white", marginTop:"20px"}}>all projects that we have already done , proven can help to use more <br /> comfortable, then can used by client from our business</p>
            </div>
            <div className="main flex w-full mt-20" style={{justifyContent:"space-around", marginTop:"70px"}}>
                <img className="h-[40px] w-[72px] " style={{width:"300px", height:"300px", borderRadius:"15px"}} src={phone}  alt="sdf" />
                <img className="h-[40px] w-[72px] " style={{width:"300px", height:"300px", borderRadius:"15px"}} src={cloud}  alt="sdf" />
                <img className="h-[40px] w-[72px] " style={{width:"300px", height:"300px", borderRadius:"15px"}} src={fone}  alt="sdf" />
            </div>
            <button className="btn" style={{color:"white", width:"200px", height:"50", border:"1px solid white", borderRadius:"15px", padding:"12px", marginTop:"50px"}}>See All Portfoflio</button>


            <h1  style={{color:"white", fontSize:"30px", marginTop:"70px"}}>Testimontial</h1>
            <h1  style={{color:"white", fontSize:"50px", }}>People Talk about us</h1>

            <div className="cardllar flex w-full" style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}}>


                <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>

                <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>

                <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>

            </div>

            <div className="container23 w-full" >
                     <img style={{width:"500px", height:"300px"}} src={coding}  alt="" />
                <div className="left"   >
                    <h1  style={{color:"white", fontSize:"50px", textAlign:"right" }}>Interesting <br /> Collaboration <br /> With Us?</h1>
                        <p style={{color:"white", textAlign:"right", marginTop:"30px"}}>Help you to reach your business goal</p>
                            <button style={{height:"50px", width:"200px", borderRadius:"30px", backgroundColor:"white", marginTop:"30px" }}>Get Started </button>
                </div>
            </div>

            <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">Flowbite</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>

        </div>
    )
}


export default CenterContainer;