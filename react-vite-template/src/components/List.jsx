import styles from './List.module.css'

export default function List() {
    const arr = [
        {
            id: 1,
            title: 'Title for One',
            isShow: true
        },
        {
            id: 2,
            title: 'Title for two',
            isShow: true
        },
        {
            id: 3,
            title: 'Title for Three',
            isShow: false
        }
    ]

    const prepareList = arr.map(item => <li key={item.id}>{item.title}</li>)

    return (
        <div className={styles.list}>

            <h3>Prepare List</h3>
            {prepareList}

            <h3>List map with filter</h3>
            <ul>
                {arr.map((item, idx) => {
                    return item.isShow && <li key={item.id + idx}>{item.title}</li>
                })}
            </ul>   

           
        </div>
    )
}