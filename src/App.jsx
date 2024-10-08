import './App.css';
import logo from './assets/logo.svg';
import componentOne from './assets/image-1.svg';
import componentTwo from './assets/image-2.svg';
import componentThree from './assets/image-3.svg';
import componentFour from './assets/image-4.svg';
import componentFive from './assets/image-5.svg';
import backImageOne from './assets/back-image-1.svg';
import backImageTwo from './assets/back-image-2.svg';
import blockBackground from './assets/block-back.svg';
import productImageOne from './assets/product-image-1.svg';
import productImageTwo from './assets/product-image-2.svg';
import productImageThree from './assets/product-image-3.svg';
import componentSix from './assets/image-6.svg';
import componentSeven from './assets/image-7.svg';
import componentEight from './assets/image-8.svg';
import componentNine from './assets/image-9.svg';
import componentTen from './assets/image-10.svg';
import componentEleven from './assets/image-11.svg';

function App() {

    return (
        <>
            <header>
                <nav className={"grid-item-menu-one"}>
                    <button>GO BACK</button>
                    <ul className={'grid-item-menu-list'}>
                        <li><a>STORY</a></li>
                        <li><a>SHOP</a></li>
                    </ul>
                </nav>
                <div className={"grid-item-brand"}>
                    <img className={"logo"} src={logo} alt={"Логотип"}/>
                </div>
                <nav className={"grid-item-menu-two"}>
                    <ul>
                        <li><a>CONTACT</a></li>
                        <li><a>WHOLESALE</a></li>
                    </ul>
                    <button>CLONE</button>
                </nav>
            </header>
            <main>
                <div className={"image-one-container"}>
                    <img className={"image-one"} src={componentOne} alt={"Компонент 1"}/>
                </div>

                <div className={"image-two-container"}>
                    <div className="marquee">
                        <img src={componentTwo} alt="Бегущая дорожка" className="marquee-image"/>
                    </div>
                </div>
                <div className={"image-three-container"}>
                    <img className={"image-three"} src={componentThree} alt={"Компонент 3"}/>
                </div>
                <div className={"heading-one-container"}>
                    <h1 className={"heading-one"}>
                        THE FIRST HOT<br/>
                        SAUCE MADE FOR<br/>
                        COFFEE
                    </h1>
                </div>
                <div className={"image-four-container"}>
                    <img className={"image-four"} src={componentFour} alt={"Компонент 4"}/>
                </div>
                <div className={"image-eleven-container"}>
                    <img className={"image-eleven"} src={componentEleven} alt={"Компонент 11"}/>
                    <h2 className={'title'}>THROW<br/>SOME<br/>LAVA IN<br/>YOUR JAVA</h2>
                    <img className={"image-eleven"} src={componentEleven} alt={"Компонент 11"}/>
                </div>
                {/*<div className={"image-five-container"}>*/}
                {/*    <img className={"image-five"} src={componentFive} alt={"Компонент 5"}/>*/}
                {/*</div>*/}
                <div className={"product-container"}>
                    {/*<div className={"back-images"}>*/}
                    {/*    <img className={"back-image-left-1"} src={backImageOne} alt={"Картинка 1 на фон"}/>*/}
                    {/*    <img className={"back-image-left-2"} src={backImageTwo} alt={"Картинка 2 на фон"}/>*/}
                    {/*    <img className={"back-image-right-2"} src={backImageTwo} alt={"Картинка 2 на фон"}/>*/}
                    {/*    <img className={"back-image-right-1"} src={backImageOne} alt={"Картинка 1 на фон"}/>*/}
                    {/*</div>*/}
                    <div className={"block-one-container"}>

                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}

                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={"block-two-container"}>
                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}
                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={"block-three-container"}>
                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}
                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {/*<div className={"image-six-container"}>*/}
                {/*    <img className={"image-six"} src={componentSix} alt={"Компонент 6"}/>*/}
                {/*</div>*/}
                {/*<div className={"image-seven-container"}>*/}
                {/*    <img className={"image-seven"} src={componentSeven} alt={"Компонент 7"}/>*/}
                {/*</div>*/}
                {/*<div className={"heading-two-container"}>*/}
                {/*    <h1 className={"heading-two"}>*/}
                {/*        THE STORY BEHIND<br/>*/}
                {/*    </h1>*/}
                {/*</div>*/}
                {/*<div className={"image-eight-container"}>*/}
                {/*    <img className={"image-eight"} src={componentEight} alt={"Компонент 8"}/>*/}
                {/*</div>*/}
                {/*<div className={"image-nine-container"}>*/}
                {/*    <img className={"image-nine"} src={componentNine} alt={"Компонент 9"}/>*/}
                {/*</div>*/}
                {/*<div className={"image-six-container-repeat"}>*/}
                {/*    <img className={"image-six-repeat"} src={componentSix} alt={"Компонент 6"}/>*/}
                {/*</div>*/}
                {/*<div className={"image-ten-container"}>*/}
                {/*    <img className={"image-ten"} src={componentTen} alt={"Компонент 10"}/>*/}
                {/*</div>*/}
            </main>
            {/*<footer>*/}
            {/*    <nav className={"grid-item-menu-footer"}>*/}
            {/*        <ul>*/}
            {/*            <li>PRIVACY</li>*/}
            {/*            <li>UJJO LLC, COLUMBUS OH, 43219</li>*/}
            {/*            <li>INSTAGRAM</li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</footer>*/}
        </>
    )
}

export default App
