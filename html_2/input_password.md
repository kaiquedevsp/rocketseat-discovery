<p>
    1*
<form action="senha simples">

    <label for="Senha1">Senha</label>
    <input name="Senha1" type="password"
    minlength="4"
    maxlength="10"
    title="Sua senha deve conter no minimo 4 caracteres e no máximo 8 caracteres"
    size="10"
    required    
    >
    <button type="submit">Enviar</button>

</form>
</p>

<!--
   O pattern pode subtituir o minlength e o maxlength como no exemplo abaixo
-->
    2*
<form action="Senha complexa">
    <label for="Senha2">Senha</label>
    <input name="Senha2" type="password"
    pattern="[0-9a-fA-F]{4,8}"
    title="Coloque em HEX no minimo 4 caracteres e no máximo 8 caracteres"
    placeholder="Digite sua Senha"
    size="10"
    required
    >


    <button type="submit">Enviar</button>

</form>