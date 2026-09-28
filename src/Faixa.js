import React from "react"
import { View } from "react-native"
import Estilo from "./Estilo"

const CORES = ["#FF0000", "#FFC107", "#0072CE"]

export default () => (
    <View style={Estilo.Faixa}>
        {Array.from({ length: 12 }).map((_, i) => (
            <View
                key={i}
                style={{ flex: 1, backgroundColor: CORES[i % CORES.length] }}
            />
        ))}
    </View>
)