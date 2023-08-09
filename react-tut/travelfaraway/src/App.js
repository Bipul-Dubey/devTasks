import { useState } from "react";

export default function App() {
    const [items, setItemState] = useState([])

    function addItemHandler(item) {
        setItemState((items) => [...items, item])
    }

    function deleteItemHandler(id) {
        setItemState((items) => items.filter((item) => id !== item.id))
    }

    function onToggleItemHandler(id) {
        setItemState((items) =>
            items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
    }

    function clearListHandler() {
        setItemState([])
    }

    return <div className="app">
        <Logo />
        <Form onAddItem={addItemHandler} />
        <PackingList items={items} onDeleteItem={deleteItemHandler} onToggleItems={onToggleItemHandler} onClearList={clearListHandler} />
        <Stats items={items} />
    </div>
}

function Logo() {
    return <h1>🏝️ Far Away 👜</h1>
}

function Form({ onAddItem }) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function submitHandler(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }

        onAddItem(newItem);

        setDescription("")
        setQuantity(1)
    }

    return (
        <form className="add-form" onSubmit={submitHandler}>
            <h3>What do you need for your 😎 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    (num) => (<option value={num} key={num}>{num}</option>))
                }
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
    const [sortBy, setSortBy] = useState("input")
    let sortedItems
    if (sortBy === 'input') sortedItems = items

    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort By Input Order</option>
                    <option value="description">Sort By Description</option>
                    <option value="packed">Sort By Packed Status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    )
}

function Item({ item, onDeleteItem, onToggleItems }) {
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button type="button" onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function Stats({ items }) {
    if (!items.length) return <footer className="stats">
        <em>Start adding Items to list</em>
    </footer>

    const itemNums = items.length
    const packedItems = items.filter(item => item.packed).length
    const percentage = packedItems / itemNums * 100;
    return (
        <footer className="stats">
            {percentage !== 100 ? <em>👜 You have {itemNums} items on your list, and already pack {packedItems} ({percentage.toFixed(2)}%)</em> :
                <em>You are ready to go...</em>}
        </footer>
    );
}