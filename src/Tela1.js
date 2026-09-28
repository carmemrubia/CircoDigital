import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native"
import Estilo from "./Estilo"
import Faixa from "./Faixa"

export default function Tela1() {
    const { width } = useWindowDimensions()
    const lado = Math.min(width * 0.4, 200)
    const [aberta, setAberta] = useState(false)

    return (
        <View style={Estilo.containerBase}>
            <Faixa />
            <ScrollView contentContainerStyle={Estilo.Rolagem}>
                <View style={[Estilo.Circulo, { width: lado, height: lado, borderRadius: lado / 2 }]}>
                    <Text style={{ fontSize: lado * 0.5 }}>🎪</Text>
                </View>
                <Text style={Estilo.Titulo}>O Incrível Circo Digital</Text>
                <Text style={Estilo.RotuloSinopse}>SINOPSE</Text>
                <Text style={Estilo.Subtitulo}>
                    Um grupo de personagens acorda preso dentro de um circo que existe só dentro de um computador. Ninguém lembra como chegou ali, e ninguém sabe como sair. Comandados por Caine, um apresentador de entusiasmo perturbador, eles tentam sobreviver ao show enquanto descobrem, aos poucos, o que realmente são: sinais presos numa transmissão sem plateia.
                </Text>
                <TouchableOpacity style={Estilo.Botao} onPress={() => setAberta(!aberta)}>
                    <Text style={Estilo.BotaoTexto}>
                        {aberta ? "Fechar os olhos de novo" : "Entrar no circo"}
                    </Text>
                </TouchableOpacity>
                {aberta
                    ? <View style={Estilo.Aviso}>
                        <Text style={Estilo.AvisoEmoji}>🎫</Text>
                        <Text style={Estilo.AvisoTexto}>
                            Sua entrada já foi validada. Ninguém se lembra de ter comprado o ingresso, mas aqui está você, dentro do circo.
                        </Text>
                    </View>
                    : <Text style={Estilo.Subtitulo}>A cortina ainda está fechada... por enquanto.</Text>
                }
            </ScrollView>
        </View>
    )
}