using System;

namespace primeiroApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Jogo de perguntas
            // Console.WriteLine => imprimir perguntas na tela
            // recolher os dados
            // atribuir esses dados a variáveis
            // mostrar uma pontuação ao usuário

            int pontuacao = 0;
            int resposta_1;
            int resposta_2;
            
            
            string resposta_3;
            string resposta_4;

            float resposta_5;

            // Pergunta 1
            Console.WriteLine("Quanto é 5 + 5?\n escreva sua resposta abaixo:");
            resposta_1 = Convert.ToInt32(Console.ReadLine());

            if(resposta_1 == 10)
            {
                pontuacao++;
            }

            // Pergunta 2
            Console.WriteLine("Quanto é 10 + 5?\n escreva sua resposta abaixo:");
            resposta_2 = Convert.ToInt32(Console.ReadLine());

            if(resposta_2 == 15)
            {
                pontuacao++;
            }

           // Pergunta 3
           Console.WriteLine("Quem é o CEO da danki code?\n escreva sua resposta abaixo:");
           resposta_3 = Console.ReadLine() ?? "";

           if(resposta_3 == "Guilherme")
           {
               pontuacao++;
           }

          // Pergunta 4
          Console.WriteLine("Quem é o instrutor do curso de c#?\n escreva sua resposta abaixo:");
           resposta_4 = Console.ReadLine() ?? "";

           if(resposta_4 == "Moises")
           {
               pontuacao++;
           }

          // Pergunta 5
          Console.WriteLine("Quanto é 10.55 + 5?\n escreva sua resposta abaixo:");
           resposta_5 = float.Parse(Console.ReadLine() ?? "0");

           if(Math.Abs(resposta_5 - 15.55f) < 0.01f)
           {
               pontuacao++;
           }

            // mostrar a pontuação final
           Console.WriteLine("Sua pontuação final é: " + pontuacao);            
        }
    }
}