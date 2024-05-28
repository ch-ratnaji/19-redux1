import classes from './Counter.module.css';
// import { Component } from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);
    console.log(show);
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    function handleIncrement() {
        dispatch(counterActions.increment());
    }

    function handleDecrement() {
        dispatch(counterActions.decrement());
    }
    function handleIncrease() {
        dispatch(counterActions.increase(10));
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrease}>Increment by 10</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
// class Counter extends Component {
//     handleIncrement() {
//         this.props.increment();
//     }
//     handleDecrement() {
//         this.props.decrement();
//     }
//     toggleCounterHandler() { }

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//                     <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => { dispatch({ type: 'increment' }) },
//         decrement: () => { dispatch({ type: 'decrement' }) }
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
