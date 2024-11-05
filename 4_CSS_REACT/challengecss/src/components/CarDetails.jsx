import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
  return (
    <div className={styles.car_details}>
        <h1>{car.brand}</h1>
        <p>{car.km}</p>
        <p>{car.color}</p>
    </div>
  )
}

export default CarDetails