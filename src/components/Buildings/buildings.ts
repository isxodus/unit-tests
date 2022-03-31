type StreetType = {
    title: string
}

type AddressType = {
    number?: number,
    street: StreetType
}


type HouseType = {
    builtIn: number,
    repaired: boolean,
    address: AddressType
}

type GovBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: GovBuildingType,
    citizensNumber: number
}

export const addMoneyToBudget = (building: GovBuildingType, budget: number) => {
    building.budget += budget

}