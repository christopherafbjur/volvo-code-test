import cars from '../api/cars.json'
import { Car } from '../types'

export function getAllCarIds() {
    return (cars as Car[]).map(({id}) => {
      return {
        params: {
          id
        }
      }
    })
  }

export function getCarData(id: any){
    return (cars as Car[]).find(car => car.id === id)
}