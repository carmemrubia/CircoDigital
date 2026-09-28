import React from "react"
import { View, Text, ScrollView } from "react-native"
import Estilo from "./Estilo"
import Faixa from "./Faixa"
import Cartao from "./Cartao"

export default function Tela4() {
    return (
        <View style={Estilo.containerBase}>
            <Faixa />
            <ScrollView contentContainerStyle={Estilo.Rolagem}>
                <Text style={Estilo.Titulo}>O Circo</Text>
                <Cartao imagem={require("../assets/personagens/caine.png")} tag="O APRESENTADOR" nome="Caine" texto="Comanda o show sempre sorrindo, sempre animado demais para a situação. Promete uma saída todo dia, mas nunca cumpre. Fala como se sempre estivesse sendo assistido, e ninguém sabe ao certo o que ele realmente é." />
                <Cartao imagem={require("../assets/personagens/bolha.jpg")} tag="A ASSISTENTE" nome="Bubble" texto="Está sempre ao lado de Caine, ajudando com o que for preciso. Tem opiniões fortes sobre tudo, inclusive sobre quem merece continuar no show. Leal até o fim, mesmo quando isso significa ser cruel com os outros." />
                <Cartao imagem={require("../assets/personagens/abstracao.jpg")} tag="O QUE SOBRA" nome="Abstração" texto="É o que acontece quando alguém para de lutar contra o circo por dentro da própria cabeça. A consciência se desfaz aos poucos, até sobrar só instinto. No fim, não resta rosto, nem nome, nem volta." />
                <View style={Estilo.Aviso}>
                    <Text style={Estilo.AvisoEmoji}>🎪</Text>
                    <Text style={Estilo.AvisoTexto}>
                        O show nunca termina. E, a partir de agora, você também faz parte dele.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}