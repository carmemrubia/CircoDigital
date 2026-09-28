import React from "react"
import { View, Text, ScrollView } from "react-native"
import Estilo from "./Estilo"
import Faixa from "./Faixa"
import Cartao from "./Cartao"

export default function Tela2() {
    return (
        <View style={Estilo.containerBase}>
            <Faixa />
            <ScrollView contentContainerStyle={Estilo.Rolagem}>
                <Text style={Estilo.Titulo}>Elenco</Text>
                <Cartao imagem={require("../assets/personagens/pomni.png")} tag="A MAIS NOVA" nome="Pomni" texto="Foi a última a cair no circo e ainda não aceitou que isso é real. Ansiosa e cheia de dúvidas, questiona tudo o que os outros já aceitaram como normal. Enquanto todo mundo desistiu de procurar uma saída, ela continua tentando, mesmo sabendo que talvez não exista." />
                <Cartao imagem={require("../assets/personagens/ragatha.png")} tag="A CUIDADORA" nome="Ragatha" texto="Feita de pano e boa vontade, é quem segura as pontas quando ninguém mais aguenta. Paciente e atenciosa, carrega um sorriso que nem sempre é verdadeiro. Cuida dos outros como se isso fosse a única coisa que ainda faz sentido pra ela." />
                <Cartao imagem={require("../assets/personagens/jax.png")} tag="O PREDADOR" nome="Jax" texto="Sarcástico, imprevisível e cruel por diversão, gosta de ver os outros desconfortáveis, principalmente os mais novos. Tem um humor afiado que usa pra provocar, nunca pra ajudar. Ninguém confia nele, e ele faz questão de manter assim." />
            </ScrollView>
        </View>
    )
}