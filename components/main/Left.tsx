import React from "react";
// import Nav from "../sub/Nav";
import Links from "../sub/Links";

const Left = () => {

    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
                    Nitin Veeraperumal
                </div>
                    <div className="font-medium tracking-tight text-slate-200 sm:text-xl text-nowrap mt-4">
                        Math and Computer Science @ UCLA
                    </div>
                <div className="hidden md:block mt-2 leading-normal whitespace-pre">
                    Previously SWE @ Grindr | Seeking Full-Time Roles
                </div>
                <div className="block md:hidden mt-2 leading-normal whitespace-pre">
                    Prev SWE @ Grindr <br/>Seeking Full-Time Roles
                </div>

                {/*<div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">*/}
                {/*    <div className="mb-4">*/}
                {/*        to*/}
                {/*    </div>*/}
                {/*    <div className="mb-4">*/}
                {/*        do*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        later*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<Nav />*/}
            </div>
            <Links />
        </div>
    );
};

export default Left;