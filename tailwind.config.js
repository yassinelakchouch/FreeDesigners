/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        tablet:"678px",
        desktop:"1280px"
      },      
      colors:{
        myblack:"#000000",
        mywhite:"#FFFFFF",
        mygray:"#B1AAA2",
        myorange:"#F5A560",
        mypurple:"#755CDE",
        myred:"#EA7564",
        mypink:"#F39D9E",
        mygreen:"#62C4B7",
        mybrown:"#55204A",
        mybody:"#FFF7F0"
      },
      width:{
        '54':'54px',
        '221':'221px',
        '248':'248px',
        '85':'85px',
        '112':'112px',
        '43':'43px',
        '77':'77px',
        '74':'74px',
        '306':'306px',
        '360':'360px',
        '380':'380px',
        '175':'175px',
        '163':'163px',
        '124':'124px',
        '202':'202px',
        '346':'346px',
        '531':'531px'
  
      },
      height:{
       '54':'54px',
       '260':'260px',
       '139':'139px',
       '120':'120px',
       '44':'44px',
       '60':'60px',
       '39':'39px',
       '360':'360px',
       '380':'380px',
       '175':'175px',
       '124':'124px',
       '202':'202px',
       '346':'346px',
       '531':'531px'
       
      },
      margin:{
        '43':'43px',
        '16':'16px',
        '122':'122px',
        '26':'26px',
        '40':'40px',
        'auto':'auto',
        '20':'20px',
        '5':'5px',
        '10':'10px'
      }
    }
  },
  plugins: []
}
