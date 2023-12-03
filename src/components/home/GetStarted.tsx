import Button from '../ui/Button'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'

function GetStarted() {
  return (
    <section className="dark:bg-black bg-white md:h-screen h-full flex justify-center items-center w-full  md:px-0 px-5 py-20 ">
      <div className="grid md:grid-cols-8 grid-cols-4 h-full w-full dark:bg-primary/10 border-primary border-[0.5px] bg-primary/10 max-w-7xl mx-auto relative ">
        <div className="md:h-20 h-10 w-10 md:w-20 border-t-[0.5px] absolute -top-3 -left-0 md:top-10 md:left-10 border-l-[0.5px] opacity-30" />
        <div className="md:h-20 h-10 w-10 md:w-20 border-b-[0.5px] absolute -bottom-5 -right-0 md:bottom-10 md:right-10 border-r-[0.5px] opacity-30" />

        <div className="col-span-4 flex flex-col justify-center items-start md:p-20 p-5">
          <IntroLable label="Deploy in minuts" />
          <Title title="Get started with codemevel" />
          <SubTitle subTitle="Create a cloud account, connect your GitHub account and deploy in minutes." />
        </div>
        <div className="col-span-4 md:p-20 p-5">
          <div className="dot-matrix h-full w-full flex justify-center items-center  ">
            <div className="h-auto w-auto dark:bg-black/50 bg-white/50 md:p-20 p-5 py-10">
              <Button ariaLabel="Get Strated" title="Get Started ->" />{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
