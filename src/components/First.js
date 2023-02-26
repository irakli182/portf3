import React from 'react'
import './first.css'
import mountain from "../images/mountain.png"
import iceberg from "../images/iceberg.png"
import solid from "../images/solid.jpg"
import laptop from "../images/project.jpg"
import background from "../images/background.jpg"
import hole from "../images/hole.png"

import { FaPhone } from 'react-icons/fa'
import { SiGit, SiGmail } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { IoLocation } from 'react-icons/io5'
import { IoMail } from 'react-icons/io5'


const First = () => {


    const href = () => {

    const button = document.getElementById("x3")

    button.addEventListener('click', function() {
        window.open('https://projectsweb.vercel.app/', '_blank')
    })}

    function toGit () {
    
        const button = document.getElementById('git')
    
        button.addEventListener('click', function() {
            window.open('https://github.com/irakli182?tab=repositories', '_blank')
        })
    
    }
    
    function toLoc () {
        
        const button = document.getElementById('loc')
    
        button.addEventListener('click', function() {
            window.open('https://goo.gl/maps/Pj8UEqWL1QCBbCBb6', '_blank')
        })
    
    }
    
    function toFac () {
        
        const button = document.getElementById('fac')
    
        button.addEventListener('click', function() {
            window.open('https://www.facebook.com/irakli.berikashvili.581', '_blank')
        })
    
    }
    
    function toIns () {
        
        const button = document.getElementById('ins')
    
        button.addEventListener('click', function() {
            window.open('https://www.instagram.com/slatra1/', '_blank')
        })
    
    }
    
    



  return (
    <div>

        <div id='introdiv'>


            <p id='IAM' >I Am Irakli</p>
            <p id='WEB' >Web Developer</p>

            <img src={hole} className="hole"></img>

        </div>

        <div id='aboutdiv'>
            
            <div className='container1'>
                <div>
                    <p id='z1' className='zz'>Hi, my name is</p>
                    <p id='z2' className='zz'>Irakli Berikashvili.</p>
                    <p id='z3' className='zz'>I build Web apps.</p>
                    <p id='z4' className='zz' >I am from Tbilisi, Georgia. Growing up, programming has always been a mystery for me, so I started learning it. During my journey I discovered many interesting topics, but web developement always intrigued me the most, so I became reactJS developer!</p>
                </div>

            </div>

            <div className='imagediv'>
                <img className='laptopimg' src={laptop}></img>
            </div>


        </div>


        <div className='skillsdiv'>
        
            <p id='c1' className='zz'>Skills:</p>
            
            <img className='iceberg' src={iceberg}></img>


            <div className='skillsdiv1'>

                <ul>
                    <li id='sk1' className='skill'>Python</li>
                    <li id='sk2' className='skill'>Javascript</li>
                    <li id='sk3' className='skill'>reactJS</li>
                    <li id='sk4' className='skill'>PHP</li>
                </ul>

                <ul>
                    <li id='sk5' className='skill'>GIT</li>
                    <li id='sk6' className='skill'>Photoshop</li>
                    <li id='sk7' className='skill'>Html</li>
                    <li id='sk8' className='skill'>Css</li>
                </ul>

            </div>
            
            
        </div>


        <div className='projectsdiv'>

            <div className='headtext2'>
                <p id='x1' className='zz'>I've also created various projects,</p>
                <p id='x2' className='zz'>Check them out!</p>

            <div className='butdiv'>
                <p onMouseEnter={href} id='x3' className='zz'>Projects</p>
            </div>

            </div>

        </div>

        <div className='contactsdiv'>


            <div className='contactscontainer'>
                <div className='contacts'>

                    <div>
                        <p className='m1' >contacts</p>
                    </div>


                    <div className='infodiv'>
                        
                        <div>
                            <p id='git' onMouseEnter={toGit} > <SiGithub/> Github</p>
                            <p id='loc' onMouseEnter={toLoc} > <IoLocation/> Location</p>
                            <p id='fac' onMouseEnter={toFac} > <SiFacebook/> Facebook</p>
                            <p id='ins' onMouseEnter={toIns} > <SiInstagram/> Instagram</p>
                            <p id='pho' > <FaPhone/> 555 411 337</p>
                            <p id='gma' >iraklibusiness1@gmail.com</p>
 
                        </div>


                    </div>



                </div>

            </div>
            
        </div>

    </div>
  )
}

export default First