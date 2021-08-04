import React, {useState} from 'react';
import {getTime} from './getTime';


export const YandexMain = (props) => {

    const {state, setState} = useState({
        search: '',
    });

    const handleChange = (event) => setState({[event.name]: event.target.value})

    // Отвечает за все картинки
    const Image = (props) => <img className={props.className} src={props.img} alt="image"/>

    // Отвечает за все текста
    const Text = (props) => <p className={props.text}>{props.text}</p>

    // Отвечает за все ссылки
    const Link = (props) => <a className={props.className} href={props.link}>{props.item}</a>

    // Отвечает за все кнопки
    const Button = (props) => <button type={props.type} className={props.className}>{props.item}</button>

    // Отвечает за все формы
    const Form = (props) => <form className={props.className}>{props.children}</form>

    // Отвечает за все списки
    const List = (props) => <ul className={props.className}>{props.children}</ul>

    // Отвечает за все значения списков
    const ListItem = (props) =>
        <li className={props.className}>
            {props.children}
        </li>


    // Отвечает за все инпуты
    const Input = (props) => <input className={props.className} name={props.name} type={props.text} value={state.name.value} onChange={handleChange}/>


    // Ссылки-заголовки
    const NewsHeaderList = (props) => {
        const HeaderItem = props.arrayHeaders.map((elem) =>
            <ListItem className={'headerNewsItem'}>
                <Link className={'headerNewsLink'} link={elem.link} item={elem.item}/>
            </ListItem>);

        return (
            <List className={'NewsHeaderList'}>
                {HeaderItem}
            </List>
        )
    }


    // Список новостей
    const NewsList = (props) => {
        const news = props.news.map((elem) =>
            <ListItem className={'newsItem'} text={elem.text}>
                <Image className={'newsImage'} img={elem.img}/>
            </ListItem>);

        return (
            <List className={'NewsList'}>{news}</List>
        )
    }

    // Список биржевых котировок
    const StockExchangeList = (props) => {
        const stockExchangeItem = props.stockExchangeArray.map((element) => <ListItem className={'stockExchangeItem'} text={element.text}/>)

        return (
            <List className={'StockExchangeList'}>{stockExchangeItem}</List>
        )
    }

    // Вставка "Работа над ошибками"
    const Aside = (props) =>
        <aside className={'Aside'}>
            <Image img={props.img}/>
            <Link link={props.link} item={props.item}/>
            <Text text={props.text}/>
        </aside>


    // Список вариантов поиска над поисковой формой
    const SearchVariantsList = (props) => {
        const variants = props.arrayVariant.map((elem) =>
            <ListItem className={'SearchVariantItem'}>
                <Link className={'SearchVariantLink'} link={elem.link} item={elem.item}/>
            </ListItem>
        )

        return (
            <List className={'SearchVariantsList'}>{variants}</List>
        )
    }


    // Блок поиска
    const SearchingBlock = (props) => {
        return (
            <div className={'SearchingBlock'}>
                <SearchVariantsList arrayVariant={props.arrayVariant}/>
                <Form className={'SearchForm'}>
                    <Input {...props}/>
                    <Button type={'submit'} className={props.className} item={'найти'}/>
                </Form>
                <Image className={'Logo'} img={props.img} />
                <Text className={'primer'} text={props.text} />
            </div>
        )
    }

    // Блок который отвечает за вывод контента
    const Article = (props) =>
        <article className={props.className}>
            <Link className={'headerArticleLink'} link={props.link} item={props.item}/>
            {props.children}
        </article>


    // Вывод итогового приложения
    return (
        <div className={'YandexMain'}>
            <NewsHeaderList arrayHeaders={props.arrayHeaders}>
                <li className={'date'}>{getTime()}</li>
            </NewsHeaderList>
            <NewsList news={props.news}/>
            <StockExchangeList stockExchangeArray={props.stockExchangeArray}/>
            <Aside {...props}/>
            <SearchingBlock {...props} />
            <Image className={'banner'} img={props} />

            <section className={'content'}>
                <Article className={'weather'} {...props}>
                    <Image className={'weatherImage'} img={props.image} />
                    <Text className={'weatherText'} text={props.text} />
                    <Text className={'morningTimeWeather'} text={`утром ${props.text}`} />
                    <Text className={'dayTimeWeather'} text={`днем ${props.text}`} />
                </Article>
                <Article className={'mapGermany'} {...props}>
                    <Text className={'timetables'} text={props.text} />
                </Article>
                <Article {'ether'} {...props}>
                    <List className={'etherList'}>
                        <ListItem className={'etherItem'}>
                            <Link className={'etherLink'} link={props.link} item={''} />
                            <Text className={'etherDescriptionText'} text={props.text} />
                            <Text className={'etherProgramName'} text={props.text} />
                        </ListItem>
                    </List>
                </Article>
                <Article className={'visited'} {...props}>
                    <List className={'visitedList'}>
                        <ListItem className={'visitedItem'}>
                            <Text className={'visitedText'} text={props.text} />
                        </ListItem>
                    </List>
                </Article>
                <Article className={'telePrograms'} {...props}>
                    <List className={'teleProgramsList'}>
                        <ListItem className={'teleProgramsItem'}>
                            <Text className={'teleProgramDateText'} text={props.text} />
                            <Text className={'teleProgramNameText'} text={props.text} />
                            <Text className={'teleProgramChanelText'} text={props.text} />
                        </ListItem>
                    </List>
                </Article>
            </section>
        </div>
    )
}
