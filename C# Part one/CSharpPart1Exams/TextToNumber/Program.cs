using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TextToNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int module = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            Console.WriteLine(TextToNumber(input.ToLower(), module));
        }

        private static int TextToNumber(string input, int module)
        {
            int result = 0;
            for (int i = 0; i < input.Length; i++)
            {
                if (input[i] == '@')
                {
                    return result;
                }
                else if (char.IsDigit(input[i]))
                {
                    result *= (input[i] - '0');
                }
                else if (char.IsLetter(input[i]))
                {
                    switch (input[i])
                    {
                        case 'a': result += 0; break;
                        case 'b': result += 1; break;
                        case 'c': result += 2; break;
                        case 'd': result += 3; break;
                        case 'e': result += 4; break;
                        case 'f': result += 5; break;
                        case 'g': result += 6; break;
                        case 'h': result += 7; break;
                        case 'i': result += 8; break;
                        case 'j': result += 9; break;
                        case 'k': result += 10; break;
                        case 'l': result += 11; break;
                        case 'm': result += 12; break;
                        case 'n': result += 13; break;
                        case 'o': result += 14; break;
                        case 'p': result += 15; break;
                        case 'q': result += 16; break;
                        case 'r': result += 17; break;
                        case 's': result += 18; break;
                        case 't': result += 19; break;
                        case 'u': result += 20; break;
                        case 'v': result += 21; break;
                        case 'w': result += 22; break;
                        case 'x': result += 23; break;
                        case 'y': result += 24; break;
                        case 'z': result += 25; break;
                    }
                }
                else
                {
                    result = result % module;
                }
            }

            return result;
        }
    }
}
