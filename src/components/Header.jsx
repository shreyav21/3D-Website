import 'boxicons';

const Header = () => {

    const togglemobilemenu =()=>{
        const mobilemenu = document.getElementById('mobilemenu')

        if(mobilemenu.classList.contains('hidden')){
            mobilemenu.classList.remove('hidden');
        }else{
            mobilemenu.classList.add('hidden');
        }
    }

  return (
    <header className="flex justify-between items-center py-4 px-4  lg:px-20">


        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">SHREYA VEDPATHAK</h1>
        <nav className="hidden md:flex  items-center gap-12 ">
            <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">CODERS</a>
             <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">FEATURES</a>
              <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500"className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RESOURCES</a>
               <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOCS</a>
        </nav>
        <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
            SIGNIN
        </button> 

        {/**Mobile menu button */}

        <button onClick={togglemobilemenu} className='md:hidden text-3xl p-2 z-50 fixed top-4 right-4 '>
           <i class='bx  bx-menu-wider '  ></i> 
        </button>

        {/**mobile menu hidden by default */}
        <div id='mobilemenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70'>
            <nav className='flex flex-col gap-6 items-center'>
                 <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">CODERS</a>
             <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">FEATURES</a>
              <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RESOURCES</a>
               <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOCS</a>
            </nav>
        </div>
    </header>
    
    
  );
}

export default Header;
