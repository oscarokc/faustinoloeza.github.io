#include "stdio.h"
/*
	Faustino Loeza Perez
	110300071
	24/03/2014
*/
const int MAX =3;
void menu(int);
void ingresa(bool matriza[][MAX],int);
void imprime(bool matriza[][MAX],int);
void reflexiva(bool matriza[][MAX],int);
void simetrica(bool matriza[][MAX],int);
void transitiva(bool matriza[][MAX],int f);
int main()
{
	int x=0;
	printf("El programa te dira si la relacion que ingresaste es o no reflexiva, simetrica o transitiva\n");
	printf("ingresa 1 para ingresar matriz 0 para terminar\n");
	scanf("%d",&x);
	menu(x);
	return 0;
}

void menu(int x)
{
	while(x)
	{
		bool matriza[MAX][MAX];
		ingresa(matriza,MAX);
    	imprime(matriza,MAX);
		reflexiva(matriza,MAX);
		simetrica(matriza,MAX);
		transitiva(matriza,MAX);
		printf("\ningresa 1 para ingresar matriz y  0 para terminar\t");
		scanf("%d",&x);
	}
}
void ingresa(bool matriza[][MAX],int f)
{
	printf("ingresa los elementos de la matriz\n");
	int i,j;
	for (i = 0; i < f; i++)
		for (j = 0; j < f; j++)
		{
			printf("se encuentra fila %d columna %d:",i+1,j+1 );
			scanf("%d", &matriza[i][j]);
		}
		

}

void imprime(bool matriza[][MAX],int f)
{
	int i,j;
	for (i = 0; i < f; i++)
		for (j = 0; j < f; j++)
		{
			printf("%d %d \t%d\n",i+1,j+1,matriza[i][j] );
		}
}

void reflexiva(bool matriza[][MAX],int f)
{
	int i,j,x=0;
	for (i = 0; i < f; i++)
		for (j = 0; j < f; j++)
		{
			if(matriza[i][j]==1&&i==j)
			{
				x=x+1;
			}
			else
			{
				x=x;
			}
		}
		if(x==MAX)
		{
			
			printf("\nEs Reflexiva\n");
		}
	
		else
		{
			printf("\nNo es reflexiva\n");
		}	
}

void simetrica(bool matriza[][MAX],int f)
{
	int i,j,x=0;
		for (i = 0; i < f; i++)
			for (j = 0; j < f; j++)
			{
				if(matriza[i][j]==matriza[j][i])
			{
				x=x+1;
			}
			else
			{
				x=x;
			}
		}
		if(x==MAX*MAX)
		{
			printf("\nEs simetrica\n");
		}
	
		else
		{
			printf("\nNo es simetrica\n");
		}	
}


void transitiva(bool matriza[][MAX],int f)
{
	int i,j,z,x=0;
	for (i = 0; i < f; i++)
		for (j = 0; j < f; j++)
			for (z = 0; z < f; z++)
			{
				if (matriza[i][j]==1&&matriza[j][z]==1&&matriza[i][z]==1)
				{
					x=x+1;
				}
				else
				{
					x=x;
				}
			}
		if(x==MAX*MAX)
		{
			printf("\nEs transitiva\n");
		}
	
		else
		{
			printf("\nNo es transitiva");
		}	
}
