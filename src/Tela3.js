import React from "react"
import { View, Text, ScrollView } from "react-native"
import Estilo from "./Estilo"
import Faixa from "./Faixa"
import Cartao from "./Cartao"

export default function Tela3() {
    return (
        <View style={Estilo.containerBase}>
            <Faixa />
            <ScrollView contentContainerStyle={Estilo.Rolagem}>
                <Text style={Estilo.Titulo}>Mais do Elenco</Text>
                <Cartao imagem={require("../assets/personagens/gangle.jpg")} tag="A ATRIZ" nome="Gangle" texto="Vive atrás de uma máscara de teatro que nunca tira, nem para chorar. Insegura e sensível, se esconde atrás de personagens porque tem medo de mostrar quem realmente é. Quer ser vista, mas foge toda vez que alguém realmente olha pra ela." />
                <Cartao imagem={require("../assets/personagens/zooble.webp")} tag="PEÇAS SOLTAS" nome="Zooble" texto="Feita de peças que não combinam entre si, muda de forma toda vez que dorme e nunca sabe o que vai encontrar ao acordar. Direta, sarcástica e cansada de fingir que isso é normal, trata o caos do circo com um distanciamento quase engraçado." />
                <Cartao imagem={require("../assets/personagens/kinger.webp")} tag="O REI CAÍDO" nome="Kinger" texto="Achava que ajudou a criar o circo, antes de tudo dar errado. Paranoico e obcecado por controle, constrói castelos de cartas e fala sozinho como se ainda estivesse no comando. Entre lampejos de lucidez e surtos de raiva, ninguém sabe mais o que é verdade pra ele." />
            </ScrollView>
        </View>
    )
}