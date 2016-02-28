using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculationProblem
{
    class Program
    {
        static void Main(string[] args)
        {
            // TODO : integer sum correct, string sum todo
            string input = Console.ReadLine();
            string[] inputWords = input.Split(' ');
            int sum = 0;
            foreach (var word in inputWords)
            {
                sum += FindSumFromBase(word,23);
            }

            Console.WriteLine(string.Format("{0} = {1}",input,sum));
        }

        private static int FindSumFromBase(string input,int multiplier)
        {
            int sum = 0;
            for (int i = 0; i < input.Length; i++)
            {
                int currNum = GetCharValue(input[i]);
                for (int j = 0; j < input.Length - i - 1; j++)
                {
                    currNum *= multiplier;
                }
                sum += currNum;
            }

            return sum;
        }

        private static int GetCharValue(char c)
        {
            switch (c)
            {
                case 'a': return 0; ;
                case 'b': return 1;
                case 'c': return 2;
                case 'd': return 3;
                case 'e': return 4;
                case 'f': return 5;
                case 'g': return 6;
                case 'h': return 7;
                case 'i': return 8;
                case 'j': return 9;
                case 'k': return 10;
                case 'l': return 11;
                case 'm': return 12;
                case 'n': return 13;
                case 'o': return 14;
                case 'p': return 15;
                case 'q': return 16;
                case 'r': return 17;
                case 's': return 18;
                case 't': return 19;
                case 'u': return 20;
                case 'v': return 21;
                case 'w': return 22;
                //case 'x': return 23; 
                //case 'y': return 24;
                //case 'z': return 25;
                default:
                    return -1;
            }
        }

        private static string FindSumBase23(string a,string b)
        {
            for (int i = 0; i < Math.Min(a.Length,b.Length); i++)
            {
                
            }
            return null;
        }
    }
}
